/**
 * Created by Lanny on 2017/8/7.
 */
import BaseRequest from '../baseRequest'
import Urls from '../../constants/Urls'

class StockManageRequest extends BaseRequest {
    requestUrl() {
        return Urls.stockManage.getStockInfo
    }
}

class StockDetailRequest extends BaseRequest {
    requestUrl() {
        return Urls.stockManage.getStockDetail
    }
}
class StockBatchConfirmRequest extends BaseRequest {
    requestUrl() {
        return Urls.stockManage.batchConfirm
    }
}

class findContractListRequest extends BaseRequest {
    requestUrl() {
        return Urls.stockManage.getStockInfo;
    }
}

export {StockManageRequest, StockDetailRequest, StockBatchConfirmRequest, findContractListRequest};