"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { Select } from "@repo/ui/select";
import { useState } from "react";
import { TextInput } from "@repo/ui/textinput";
import { NumInput } from "@repo/ui/numinput";
import { createOnRampTransaction } from "../app/lib/actions/createOnRamp";

const SUPPORTED_BANKS = [{
    name: "HDFC Bank",
    redirectUrl: "https://netbanking.hdfcbank.com"
}, {
    name: "Axis Bank",
    redirectUrl: "https://www.axisbank.com/"
}];

interface AddMoneyProps {
    changer: boolean;
    setChanger: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AddMoney = () => {
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl);
    const [selectedBank, setSelectedBank] = useState(SUPPORTED_BANKS[0]?.name || "");
    const [amount, setAmount] = useState(0);

    return <Card title="Add Money">
    <div className="w-full">
        <NumInput label={"Amount"} placeholder={"Amount"} onChange={(inputAmount) => {setAmount(inputAmount)}} />
        <div className="py-4 text-left">
            Bank
        </div>
        <Select onSelect={(value) => {
            setRedirectUrl(SUPPORTED_BANKS.find(x => x.name === value)?.redirectUrl || "")
            setSelectedBank(SUPPORTED_BANKS.find(x => x.name === value)?.name || "")
        }} options={SUPPORTED_BANKS.map(x => ({
            key: x.name,
            value: x.name
        }))} />
        <div className="flex justify-center pt-4">
            <Button onClick={async () => {
                const {message} = await createOnRampTransaction(amount, selectedBank);
                console.log(message);
                window.location.href = redirectUrl || "";
            }}>
            Add Money
            </Button>
        </div>
    </div>
</Card>
}