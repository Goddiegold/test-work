import React, { useState, useEffect } from "react";
import "./Pagination.css";

const CustomPagination = ({ len, handleScroll }) => {

    const initial = Math.min(len, 10);
    const [range, setRange] = useState({
        start: 1,
        end: initial
    });
    useEffect(() => {
        setRange({
            start: 1,
            end: Math.min(len, 10)
        })
    }, [len]);
    const [selectedPage, setSelectedPage] = useState(1);

    const increment = () => {
        let { start, end } = range;
        start++;
        end++;
        setRange({
            start,
            end
        })
        setSelectedPage(start);
        handleScroll(Math.max(0, start-1));
    }
    const decrement = () => {
        let { start, end } = range;
        start--;
        end--;
        setRange({
            start,
            end
        });
        setSelectedPage(start);
        handleScroll(Math.max(0, start-1));
    }
    const handlePaginate = (val) => {
        if(val !== "...") {
            setSelectedPage(val);
            handleScroll(Math.max(0, val-1));
        } else {
            setRange({
                ...range,
                start: range.start+2
            })
        }
    }
    const pageStyle = (val) => {
        return {
            color: selectedPage==val?"#0076F7":"#212B36",
            border: `1px solid ${selectedPage==val?"#0076F7":"#DFE3E8"}`
        }
    }
    const getRangeArray = () => {
        let array = [];
        for(var i=range.start;i<=range.end;i++) array.push(i);
        return array;
    }

    return (
        <div className="Pagination">
            {range.start>1 && <div className="left_scroll" onClick={decrement}>{"<"}</div>}
            {range.end-range.start <= 5 ? 
                <div className="pages">
                    {getRangeArray().map((val, idx) => (
                        <div className="page" key={idx}
                        onClick={() => handlePaginate(val)}
                        style={pageStyle(val)}>
                            {val}
                        </div>
                    ))}
                </div> :
                <div className="pages">
                    <div className="page" onClick={() => handlePaginate(range.start)}
                    style={pageStyle(range.start)}>
                        {range.start}
                    </div>
                    <div className="page" onClick={() => handlePaginate(range.start+1)}
                    style={pageStyle(range.start+1)}>
                        {range.start+1}
                    </div>
                    <div className="page" onClick={() => handlePaginate("...")}
                    style={pageStyle("...")}>
                        {"..."}
                    </div>
                    <div className="page" onClick={() => handlePaginate(range.end-1)}
                    style={pageStyle(range.end-1)}>
                        {range.end-1}
                    </div>
                    <div className="page" onClick={() => handlePaginate(range.end)} 
                    style={pageStyle(range.end)}>
                        {range.end}
                    </div>
                </div>
            }
            {range.end<len && <div className="right_scroll" onClick={increment}>{">"}</div>}
        </div>
    )
}

export default CustomPagination;