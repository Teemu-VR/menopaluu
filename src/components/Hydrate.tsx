import React, { createContext, useContext, useEffect, useState } from 'react'

const HydrateContext = createContext(false)

export function useIsHydrated() {
	return useContext(HydrateContext)
}

export default function HydrateProvider({ children }) {
	const [isHydrated, setIsHydrated] = useState(false)
	useEffect(() => {
		setIsHydrated(true)
	}, [])
	return <HydrateContext.Provider value={isHydrated}>{children}</HydrateContext.Provider>
}
