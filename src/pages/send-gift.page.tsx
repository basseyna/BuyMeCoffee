import Eye from "../assets/icons/eye.icon";
import { AppWrapper, Button, Input, Navbar } from "../components";
import styled from 'styled-components';
import { Select } from "../components/Input.component";
import React from "react";


const Balance = styled.div`
    background: #ECECEC;
`

const StyledHeader = styled.h2<{ size?: string, weight?: number }>`
    font-size: ${props => props.size || '24px'};
    color: #000;
    font-weight: ${props => props.weight || 600 };
`

const StyledTextArea = styled.textarea`
    border: 2px solid #ececec;
    height: 10rem;
    border-radius: 5px;
    width: 100%;
    padding: 8px 13px 3px 13px;
    font-size: 12px;

    &::placeholder {
        font-weight: 500;
        font-size: 12px;
        color: #808080;
    }
`

const Amount = styled.div`
    border-radius: 5px;
    border: 2px solid #e2e2e2;
    padding: 5px 13px 5px 13px;

`

const SelectTitle = styled.h4`
    color: #808080;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
`

const Total = styled.div`
    background: #ececec;
    width: 100%;
    height: 28px;
    color: #262626;
    font-weight: 500;
    font-size: 12px;
`

const Quantity = styled.button<{selected?: boolean}>`
    width: 32px;
    height: 32px;
    background: ${props => props.selected ? '#1F1F1F': '#D9D9D9'};
    border-radius: 999px;
    color: ${props => props.selected ?  '#fff': '#1F1F1F'};
`

export default function SendGift() {
    const [giftQuantity, setGiftQuantity] = React.useState(1);

    const isSelected = (value: number) => value == giftQuantity; 

    const setNewGiftQuantity = (value: number) => setGiftQuantity(value)

    return (
        <AppWrapper>

            <div className="lg:px-24">
                <Navbar title="Send Gift"/>


                <div className="flex flex-col lg:flex-row w-full lg:justify-between lg:mt-16 lg:gap-x-10">

                    <div className="mt-5 lg:w-100ha lg:h-44">
                        <Balance className="balance w-full h-20 lg:h-full  bg-slate-700 rounded-md flex flex-col justify-center items-center">
                            <StyledHeader className="flex gap-x-2" size={'12px'} weight={400}>
                                Total Balance
                                <Eye className="mt-1"/>
                            </StyledHeader>
                            <StyledHeader size={'20px'}>₦ 10,000.00</StyledHeader>
                        </Balance>
                    </div>

                    <form className="my-6 flex flex-col gap-y-5 lg:w-100ha">
                        <Select placeholder='Reciepient' className='mr-4' bg={'#fff'} borderColor={"#ECECEC"}> 
                                <option selected disabled>Select Recipient</option>
                        </Select>
                        
                        <Amount>
                            <SelectTitle>Select Amount</SelectTitle>

                            <div className="flex gap-x-4 my-6">
                                <p className="text-7xl">☕️</p>

                                <div className="w-full flex flex-col gap-y-5 px-5">
                                    <div className="buttons-group flex gap-x-3">
                                        <Quantity type='button' selected={isSelected(1)} onClick={() => setNewGiftQuantity(1)}>
                                            1
                                        </Quantity>
                                        <Quantity type='button' selected={isSelected(3)} onClick={() => setNewGiftQuantity(3)}>
                                            3
                                        </Quantity>

                                        <Quantity type='button' selected={isSelected(5)} onClick={() => setNewGiftQuantity(5)}>
                                            5
                                        </Quantity>

                                        <Quantity type='button'selected={isSelected(7)} onClick={() => setNewGiftQuantity(7)}>
                                            7
                                        </Quantity>

                                        <div className="custom-count w-14 h-8">
                                            <Input type="tel"  maxLength={2} max={20} className="text-center p-0" height={'31px'} padding="0px" onChange={(e) => setGiftQuantity(parseInt(e.target.value))} />
                                        </div>
                                    </div>
                                    <Total className="flex justify-center items-center">₦ {(250 * giftQuantity) || 0}</Total>
                                </div>
                            </div>
                        </Amount>
                        <StyledTextArea placeholder="Description"></StyledTextArea>


                        <Input  type="password" placeholder='Transaction Passkey' bg={'#fff'} borderColor={"#ECECEC"}/>

                        <Button className="mt-8">Fund Account</Button>
                    </form>
                </div>

            </div>


        </AppWrapper>
    )
}