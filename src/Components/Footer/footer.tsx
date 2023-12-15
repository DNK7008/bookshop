import React, {FC} from "react"
import classNames from "classnames"

import style from './footer.module.sass'

const Footer: FC = () => {
 return (
  <div className={classNames(style.footer, 'wrapper')}>
   <p>©2023 BookStore</p>
   <p>All rights reserved DNK</p>
  </div>
 )
}

export default Footer