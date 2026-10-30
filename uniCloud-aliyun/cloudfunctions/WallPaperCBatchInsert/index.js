exports.main = async (event, context) => {
	const db = uniCloud.database()
	// event.list 就是你要批量插入的数组
	const list = event.list
	// uniCloud支持一次add多条文档
	const res = await db.collection("wallpaperC").add(list)
	return res
}