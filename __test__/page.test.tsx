import Home from '@/app/(dashboard)/page';
import Trend from "@/components/sales-trend/Trend";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';

describe("Page", ()=>{
    it("renders without crashing", () => {
    render(<Trend/>)
        expect(screen.getByText("Sales Trends")).toBeInTheDocument()
    })
})