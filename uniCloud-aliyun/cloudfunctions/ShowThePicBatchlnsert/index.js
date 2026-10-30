exports.main = async (event, context) => {
	const db = uniCloud.database()
	const dbCmd = db.command
	const {
		action
	} = event
	console.log("收到event：", event)

	if (action === 'batchAdd') {
		// event.list 就是要批量插入的数组
		const list = event.list
		const res = await db.collection("ShowThePic").add(list)
		return res
	}

	if (action === 'batchDelete') {
		// 前端传 id数组 event.idList
		const {
			idList
		} = event
		console.log("待删除idList：", idList)
		const res = await db.collection('ShowThePic')
			.where({
				_id: dbCmd.in(idList)
			})
			.remove()
		return res
	}

	return {
		errCode: -1,
		errMsg: 'action参数不正确'
	}
};