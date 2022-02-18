import React from 'react'

import styles from './TimelineMainBlock.module.css'

interface Props {
	children?: React.ReactNode
	header?: React.ReactNode
	icon?: JSX.Element
	id: string
	image?: JSX.Element
}

export function TimelineMainBlock({ children, header, icon, id, image }: Props) {
	const inputId = `${id}-input`
	const contentId = `${id}-content`
	const labelId = `${id}-label`
	return (
		<>
			<input aria-hidden className="visually-hidden" id={inputId} type="checkbox" />
			<div className={styles.container}>
				<figure className={styles.imageContainer}>{image}</figure>
				<div className={styles.timeline}>
					<div className={styles.iconCircle}>{icon}</div>
				</div>
				<div className={styles.mainBlock}>
					{header}
					<label
						aria-controls={contentId}
						className="button"
						id={labelId}
						htmlFor={inputId}
						role="switch"
						tabIndex={0}
					>
						<span className={styles.unchecked}>Näytä lissää</span>
						<span className={styles.checked}>Näytä vähemmön</span>
					</label>
				</div>
				<div aria-labelledby={labelId} className={styles.accordion}>
					<div className={styles.accordionContent}>{children}</div>
				</div>
			</div>
		</>
	)
}
