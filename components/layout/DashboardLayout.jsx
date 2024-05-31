"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styled from "styled-components";

const DashboardLayout = ({ children }) => {
    const path = usePathname();

    // console.log('something');

    if (path === "/sign-in") {
        return children;
    }

    return (
        <Container className="flex">
            <Left className="p-[28px_20px]">
                <h1 className="head text-[#fff] font-bold text-[26px]">
                    Chit Management
                </h1>
                <Navs className="mt-[32px]">
                    <ul className="flex flex-col gap-[14px]">
                        <li>
                            <Link
                                href="/"
                                className="w-full block bg-[#000] rounded-[4px] p-[8px_12px] text-[#fff]"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/sign-in"
                                className="w-full block bg-[#000] rounded-[4px] p-[8px_12px] text-[#e3bb6b]"
                            >
                                Home
                            </Link>
                        </li>
                    </ul>
                </Navs>
            </Left>
            <Right>
                <RightHead className="flex justify-end w-full p-[24px_20px]">
                    <span className="avatar center-align">A</span>
                </RightHead>
                <Content>{children}</Content>
            </Right>
        </Container>
    );
};

export default DashboardLayout;

const Container = styled.div``;
const Left = styled.div`
    background-color: #131312;
    width: 300px;
    height: 100vh;

    h1 {
        font-family: Satoshi-Medium;
    }
`;
const Right = styled.div`
    flex: 1;
`;
const RightHead = styled.div`
    background-color: #131312;

    span.avatar {
        width: 46px;
        aspect-ratio: 1;
        border-radius: 50%;
        color: #fff;
        font-size: 20px;
        background-color: #000;
        cursor: pointer;
    }
`;
const Content = styled.div`
    min-height: calc(100vh - 94px);
    max-height: calc(100vh - 94px);
    overflow-y: scroll;
`;

const Navs = styled.div``;
