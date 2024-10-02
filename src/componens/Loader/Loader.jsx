import css from "./Loader.module.css"
import { Vortex } from 'react-loader-spinner'

export default function Loader() {
    return (
        <div className={css.loadingWrapper}>
                <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                />
             </div>
    )
}