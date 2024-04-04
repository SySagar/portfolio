import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {FrontendMover,BackendMover,Appmover,DevopsMover} from './movers';

export default function Skills() {
  return (
    <div>
        <Card className="softwares p-5  rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]">
          <CardTitle className="text-white">Skills</CardTitle>
          <CardContent>
            <div className='area w-48 h-40'>

                <FrontendMover startX={140} startY={0} endX={190} endY={80} duration={3} textContent='web' type="frontend"/>
                <BackendMover startX={400} startY={-20} endX={300} endY={-60} duration={2} textContent='backend' type="backend"/>
                <Appmover startX={310} startY={60} endX={400} endY={0} duration={3} textContent='app' type="app"/>
                <DevopsMover startX={20} startY={0} endX={38} endY={-70} duration={1} textContent='devops' type="devops"/>
            </div>
          </CardContent>
        </Card>
    </div>
  )
}
