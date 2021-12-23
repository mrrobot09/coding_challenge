import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import { Fragment, ReactElement, useEffect, useState } from "react";
import { StartupHttpService } from "../../Http/Startup/Startup.http.service";
import { startupDTO } from "../../Http/Startup/Startup.test-data";
import { Startup } from "../../Types/Startup";

export default function StartupList(): ReactElement {
const [startupList, setStartupList] = useState<Startup[]>([])
 useEffect(() => {
  StartupHttpService.getStartupList().then(item => {
    setStartupList(item)
   });
  }, [])

  return <Fragment>
    {startupList.map((startup: Startup) => (
      <Card variant="outlined" >
      <Typography variant="h4">{startup.name}</Typography>
      <Typography variant="subtitle2">{`Founded: ${startup.dateFounded.getFullYear()}`}</Typography>
      </Card>
    ))}
  </Fragment>;
}
