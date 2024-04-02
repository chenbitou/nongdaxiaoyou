module.exports = { //visitcollege
	PROJECT_COLOR: '#A1185E',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#A1185E',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
		{ title: '用户注册使用协议', key: 'SETUP_YS' }
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		forms: 'formForms|array'
	},

	NEWS_NAME: '公告',
	NEWS_CATE: [
		{ id: 1, title: '公告通知', style: 'leftpic' },
		{ id: 2, title: '校园导览', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '预约', style: 'leftbig1' },
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [
		{ mark: 'content', title: '预约须知', type: 'content', must: true },
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'mobile', len: 11, title: '手机号', must: true, edit: false },
		{ mark: 'idcard', type: 'idcard', len: 11, title: '身份证号码', must: true, edit: true },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '10:00', end: '10:59', limit: 50, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '09:00', end: '11:59', limit: 50, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		}
	]


}