import { SVGProps } from 'react';

export const CamerasIcon = (props: SVGProps<SVGSVGElement>) => {
    return <svg
        width={20}
        height={16}
        viewBox="0 0 20 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M17 2H15.414L14.414 1C13.835 0.421 12.819 0 12 0H8C7.181 0 6.165 0.421 5.586 1L4.586 2H3C1.346 2 0 3.346 0 5V13C0 14.654 1.346 16 3 16H17C18.654 16 20 14.654 20 13V5C20 3.346 18.654 2 17 2ZM10 12C9.07161 11.9999 8.1813 11.6309 7.52492 10.9744C6.86854 10.3178 6.49987 9.42739 6.5 8.499C6.50013 7.57061 6.86906 6.6803 7.52563 6.02392C8.18219 5.36754 9.07261 4.99887 10.001 4.999C10.9294 4.99913 11.8197 5.36806 12.4761 6.02463C13.1325 6.68119 13.5011 7.57161 13.501 8.5C13.5009 9.42839 13.1319 10.3187 12.4754 10.9751C11.8188 11.6315 10.9284 12.0001 10 12ZM16 7.299C15.8293 7.299 15.6602 7.26537 15.5025 7.20004C15.3448 7.13471 15.2015 7.03895 15.0808 6.91824C14.96 6.79752 14.8643 6.65421 14.799 6.49649C14.7336 6.33877 14.7 6.16972 14.7 5.999C14.7 5.82828 14.7336 5.65924 14.799 5.50151C14.8643 5.34379 14.96 5.20048 15.0808 5.07976C15.2015 4.95905 15.3448 4.86329 15.5025 4.79796C15.6602 4.73263 15.8293 4.699 16 4.699C16.3448 4.699 16.6754 4.83596 16.9192 5.07976C17.163 5.32356 17.3 5.65422 17.3 5.999C17.3 6.34378 17.163 6.67444 16.9192 6.91824C16.6754 7.16204 16.3448 7.299 16 7.299Z" />
    </svg>;
};