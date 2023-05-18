import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button
  } from "@material-tailwind/react";
import { MouseEventHandler } from "react";

type CityCardProps = {
    onClick: MouseEventHandler<HTMLButtonElement>
}


const CityCard = ({onClick}: CityCardProps) => {
    return (
        <Card className="w-96 overflow-hidden left-[-800px] top-[-300px]">
          <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 rounded-none"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt="ui/ux review check"
            />
          </CardHeader>
          <CardBody>
            <button className="ml-auto mr-[-18px] mt-[-22px] border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={onClick}
              >
              <span className="text-black h-6 w-6 text-2xl block hover:text-gray-800 hover:scale-125">
                ×
              </span>
            </button>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              City Name
            </Typography>
            <Typography>
              The place is close to Barceloneta Beach and bus stop just 2 min by walk
              and near to &quot;Naviglio&quot; where you can enjoy the main night life
              in Barcelona.
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>Learn More</Button>
          </CardFooter>
        </Card>
    )
};

export default CityCard