/**
 * Notes: 全局/首页模块业务逻辑
 * Date: 2021-03-15 04:00:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseProjectService = require('./base_project_service.js');
const setupUtil = require('../../../framework/utils/setup/setup_util.js');
const constants = require('../public/constants.js');
const MeetModel = require('../model/meet_model.js');

class HomeService extends BaseProjectService {

	async getSetup(key) {
		return await setupUtil.get(key);
	}

	/**首页列表 */
	async getHomeList() {
		let where = {
			MEET_STATUS: MeetModel.STATUS.COMM
		}
		let orderBy = {
			'MEET_ORDER': 'asc',
			'MEET_ADD_TIME': 'desc',
		}
		let list = await MeetModel.getAll(where, 'MEET_TITLE', orderBy);

		return { list };
	}
}

module.exports = HomeService;