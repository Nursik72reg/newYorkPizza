import React from "react"
import ContentLoader from "react-content-loader"


export const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={300}
        height={457}
        viewBox="0 0 280 457"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <rect x="595" y="502" rx="3" ry="3" width="88" height="6" />
        <rect x="595" y="520" rx="3" ry="3" width="52" height="6" />
        <rect x="547" y="550" rx="3" ry="3" width="410" height="6" />
        <rect x="547" y="566" rx="3" ry="3" width="380" height="6" />
        <rect x="547" y="582" rx="3" ry="3" width="178" height="6" />
        <circle cx="567" cy="514" r="20" />
        <circle cx="133" cy="120" r="114" />
        <circle cx="598" cy="480" r="92" />
        <circle cx="657" cy="590" r="61" />
        <rect x="18" y="260" rx="0" ry="0" width="234" height="28" />
        <rect x="579" y="502" rx="0" ry="0" width="2" height="42" />
        <rect x="555" y="529" rx="0" ry="0" width="64" height="8" />
        <rect x="16" y="311" rx="10" ry="10" width="238" height="63" />
        <rect x="507" y="517" rx="10" ry="10" width="235" height="47" />
        <rect x="562" y="509" rx="0" ry="0" width="102" height="51" />
        <rect x="110" y="434" rx="0" ry="0" width="1" height="1" />
        <rect x="120" y="397" rx="10" ry="10" width="129" height="43" />
        <rect x="20" y="398" rx="0" ry="0" width="72" height="42" />
        <rect x="56" y="435" rx="0" ry="0" width="7" height="2" />
    </ContentLoader>
);