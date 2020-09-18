import styled from "styled-components";

const Container = styled.div`
    width: 26rem;
    margin: auto;
    margin-top: 3rem;
`
const Box = styled.div`
    padding: 1rem;
    margin: 1rem;
`
const BoxContent = styled.div`
    display: flex;
    align-items: center;
`
const LogoBox = styled.div`
    width: 3rem;
    height: 3rem;
    background: pink;
    border-radius: 100px;
    margin: auto;
`
const Logo = styled.img`
    width: 1.5rem;
    padding-top: 0.75rem;
    margin-left: 0.75rem;
    margin-right: 0.75rem;
`
const Input = styled.input`
    display: block;
    color: gray;
    width: 97%;
    height: 2rem;
    border: 1px solid gray;
    background-color: black;
    font-size: 17px;
    margin-top: 1rem;
    padding: 0.25rem;
`
const Checkbox = styled.input`
    width: 1rem;
`
const Button = styled.button`
    width: 100%;
    height: 2rem;
    background-color: aquamarine;
    border: none;
    border-radius: 5px;
    color: black;
    font-size: 16px;
    font-weight: bold;
`
const Text = styled.p`
    color: gray;
`
const MainText = styled.h1`
    color: gray;
    text-align: center;
`
const Link = styled.a`
    color: gray;
`
export {Container, Box, LogoBox, Logo, Input, Link, Checkbox, Button, Text, MainText, BoxContent};