// WIP
import { Consolidator, fetchRemarks, getLatestFinalizedBlock, getRemarksFromBlocks, RemarkListener } from 'rmrk-tools';
import { ApiPromise, WsProvider } from "@polkadot/api";
import { Remark } from 'rmrk-tools/dist/tools/consolidator/remark';

const wsProvider = new WsProvider("wss://node.rmrk.app");
const api = ApiPromise.create({ provider: wsProvider });

export const instantiateApi = async (wsProviderUrl) => {
  const wsProvider = new WsProvider(wsProviderUrl);
  return await ApiPromise.create({ provider: wsProvider });
};

export const fetchAndConsolidate = async (startBlock:number) => {
  try {
      const api = await ApiPromise.create({ provider: wsProvider });
      const to = await getLatestFinalizedBlock(api);

      const remarkBlocks = await fetchRemarks(api, startBlock, to, ['']);
      if (remarkBlocks && !isEmpty(remarkBlocks)) {
        const remarks = getRemarksFromBlocks(remarkBlocks, ['']);
        const consolidator = new Consolidator();
        const { nfts, collections } = await consolidator.consolidate(remarks);
        console.log('Consolidated nfts:', nfts);
        console.log('Consolidated collections:', collections);
      }
  } catch (error) {
      console.log(error)
  }
}

function isEmpty(list:any[]) {
  return list.length===0
}
