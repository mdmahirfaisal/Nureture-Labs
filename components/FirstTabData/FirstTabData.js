import * as React from 'react';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


export default function FirstTabData() {
    const [data, setData] = React.useState({})

    React.useEffect(() => {
        fetch('https://raw.githubusercontent.com/akshita151199/APIs/main/data')
            .then(res => res.json())
            .then(data => {
                setData(data.data[0])
                console.log(data.data[0])
            })
            .catch(err => {
                console.log(err)
            })
    }, [])



    return (
        <>
            <div className='grid grid-cols-4 bg-[#242731] rounded py-3'>
                <div className='flex items-center justify-center'>
                    <img src={data?.img} className="mr-3" alt="Bitcoin" />

                    <div>
                        <h5 className='text-md font-semibold text-center'>{data?.asset}</h5>
                        <div className="flex items-center ">
                            <p className='text-[#808191] text-md mr-2 text-center'>{data?.type}</p>
                            <div className='flex items-center  bg-[#353945] rounded-full px-3 py-1'>
                                <img src={data?.chain?.img} className="mr-1" alt="Icon" />
                                <p className='text-xs text-center'>{data?.chain?.name}</p>
                            </div>

                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='text-md font-semibold text-center'>0.0000 BNB</h5>
                    <p className='text-[#808191] text-md text-center'>{data?.state}</p>
                </div>

                <h5 className='text-md font-semibold text-center'>{data?.user?.slice(0, 8)}</h5>

                <div>
                    <h5 className='text-md font-semibold text-center'>0.0000 BNB</h5>
                    <p className='text-[#808191] text-md mr-2 text-center'>View on BSC Scan <ExitToAppIcon fontSize='small' /> </p>
                </div>

            </div>
        </>
    );
}