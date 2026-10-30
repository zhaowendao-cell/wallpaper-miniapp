import {createRouter,createMemoryHistory} from "vue-router"
import home from "@/pages/tabbar/mine/mine"
import classify from "@/pages/tabbar/classify/classify"

const routes=[
	{
		path:"/",
		Component:home
	},
	{
		path:"/classify",
		Component:classify
	}
]

const routes=createRouter({
	history:createMemoryHistory(),
	routes
})

export default routes;
