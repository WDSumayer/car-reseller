import { useEffect } from "react";

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - CarReseller`;
    }, [title])
}
export default useTitle;