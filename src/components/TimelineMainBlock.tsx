import React from 'react'
import { Animate } from './Animate';

import styles from './TimelineMainBlock.module.css'

interface Props {
	children?: React.ReactNode
	header?: React.ReactNode
	icon?: JSX.Element
	id: string
	image?: JSX.Element
}

export function TimelineMainBlock({ children, header, icon, id, image }: Props) {
	const [open, setOpen] = React.useState(false);
	const contentId = `${id}-content`
	const labelId = `${id}-label`

	const container = styles.container + (open ? ` ${styles.containerOpen}` : '')

	return (
		<div className={container}>
			<div className={styles.timelineGrid}>
				<figure className={styles.imageContainer}>{image}</figure>
				<div className={styles.timeline}>
					<div className={styles.iconCircle}>{icon}</div>
				</div>
				<div className={styles.mainBlock}>
					{header}
					<button
						aria-controls={contentId}
						className="button"
						id={labelId}
						onClick={() => setOpen(open => !open)}
						type="button"
					>
						{open ? 'Vähempi' : 'Enempi'}
					</button>
				</div>
				<div aria-labelledby={labelId} className={styles.accordion}>
					<Animate open={open}>{children}</Animate>
				</div>
			</div>
		</div >
	)
}
