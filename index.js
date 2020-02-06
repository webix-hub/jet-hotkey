export default function handler(view) {
	return {
		attachEvent: (key, handler) => {
			webix.UIManager.addHotKey(key, handler, view);
			return { key, handler };
		},
		detachEvent: ({ key, handler }) =>
			webix.UIManager.removeHotKey(key, handler, view),
	};
}
