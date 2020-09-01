import React, {Suspense} from 'react';

export const SuspenseLoading = (Component) => {

	return (props) => {
		return <Suspense fallback={<h1>Loading posts...</h1>}>
							 <Component {...props}/>
					 </Suspense>
	}
}
