const AdminBiz = require('../../../../../../comm/biz/admin_biz.js');
const pageHelper = require('../../../../../../helper/page_helper.js');
const cacheHelper = require('../../../../../../helper/cache_helper.js');
const helper = require('../../../../../../helper/helper.js');
const cloudHelper = require('../../../../../../helper/cloud_helper.js');


Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		isLoad: false,

	},

	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		if (!AdminBiz.isAdmin(this)) return;
		if (!pageHelper.getOptions(this, options)) return;

		this._loadDetail();

	},

	_loadDetail: async function () {
		let id = this.data.id;
		if (!id) return;

		let params = {
			id
		};
		let opt = {
			title: 'bar'
		};
		let join = await cloudHelper.callCloudData('admin/join_detail', params, opt);

		if (!join) {
			this.setData({
				isLoad: null
			})
			return;
		}

		this.setData({
			isLoad: true, 
			join
		});
	},

	/**
	 * 生命周期函数--监听页面初次渲染完成
	 */
	onReady: function () {

	},

	/**
	 * 生命周期函数--监听页面显示
	 */
	onShow: function () {

	},

	/**
	 * 生命周期函数--监听页面隐藏
	 */
	onHide: function () {

	},

	onPullDownRefresh: async function () {
		await this._loadDetail();
		wx.stopPullDownRefresh();
	},

	/**
	 * 生命周期函数--监听页面卸载
	 */
	onUnload: function () {

	},

	url: async function (e) {
		pageHelper.url(e, this);
	},

})