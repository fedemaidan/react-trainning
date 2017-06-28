export default function reducer(state={
	items: [],
	loading: false,
	loaded: false,
	error: null
}, action) {
	switch (action.type ) {
		case "FETCH_ITEMS": {
			return { ...state, 
				loading: true,
				//items: action.payload
			}
		}
		case "FETCH_ITEMS_REJECTED": {
			return { ...state, loading: false, items: action.payload }
		}
		case "FETCH_ITEMS_FULFILLED": {
			return { ...state, 
				loaded: false, 
				items: action.payload 
			}
		}
		case "ADD_ITEM": {
			return { ...state, 
				loading: false, 
				items: [...state.items, 
					action.payload
					]
			}
		}

		return state

	}
}