import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {FrontendMover,BackendMover,Appmover,DevopsMover} from './movers';
import styles from '../about.module.css';
import { cn } from '@/lib/utils';

export default function Skills() {
  return (
    <div>
        <Card className={cn("skills p-5 relative rounded-3xl flex flex-col  items-start justify-center gap-5 w-[550px]  backdrop-blur-xl bg-opacity-30   bg-[var(--cardBackground)] border-[var(--cardBorder)]",styles.skills)}>
          <CardTitle className="text-white">Skills</CardTitle>
          <CardContent className='w-full'>


            <div className='area hidden lg:block  w-full  h-40'>

                <FrontendMover startX={140} startY={0} endX={190} endY={80} duration={3} textContent='web' type="frontend"/>
                <BackendMover startX={400} startY={-20} endX={300} endY={-60} duration={2} textContent='backend' type="backend"/>
                <Appmover startX={310} startY={60} endX={400} endY={0} duration={3} textContent='app' type="app"/>
                <DevopsMover startX={20} startY={0} endX={38} endY={-70} duration={1} textContent='devops' type="devops"/>
            </div>

            
 <div className='area-lg hidden md:block lg:hidden  w-full  h-40'>

<FrontendMover startX={10} startY={0} endX={100} endY={40} duration={5} textContent='web' type="frontend"/>
<BackendMover startX={250} startY={-20} endX={300} endY={-60} duration={2} textContent='backend' type="backend"/>
<Appmover startX={220} startY={60} endX={340} endY={0} duration={3} textContent='app' type="app"/>
<DevopsMover startX={20} startY={0} endX={128} endY={-10} duration={2} textContent='devops' type="devops"/>
</div>

            <div className={cn('tab-area md:hidden w-full  h-40',styles.tabArea)}>
<FrontendMover startX={14} startY={0} endX={90} endY={40} duration={4} textContent='web' type="frontend"/>
<BackendMover startX={180} startY={-20} endX={300} endY={-60} duration={2} textContent='backend' type="backend"/>
<Appmover startX={310} startY={60} endX={260} endY={0} duration={3} textContent='app' type="app"/>
<DevopsMover startX={20} startY={-10} endX={88} endY={10} duration={2} textContent='devops' type="devops"/>
</div>

<div className={cn('mob-area sm:hidden w-full  h-40',styles.mobArea)}>
<FrontendMover startX={14} startY={0} endX={50} endY={40} duration={4} textContent='web' type="frontend"/>
<BackendMover startX={180} startY={-20} endX={300} endY={-60} duration={2} textContent='backend' type="backend"/>
<Appmover startX={310} startY={60} endX={260} endY={0} duration={3} textContent='app' type="app"/>
<DevopsMover startX={20} startY={-10} endX={88} endY={10} duration={2} textContent='devops' type="devops"/>
</div>

<div className={cn('w-full h-40',styles.mobileArea)}>
<FrontendMover startX={5} startY={0} endX={40} endY={50} duration={4} textContent='web' type="frontend"/>
<BackendMover startX={180} startY={-20} endX={200} endY={-60} duration={2} textContent='backend' type="backend"/>
<Appmover startX={160} startY={30} endX={220} endY={-20} duration={4} textContent='app' type="app"/>
<DevopsMover startX={20} startY={-10} endX={58} endY={10} duration={2} textContent='devops' type="devops"/>
</div>


          </CardContent>
        </Card>
    </div>
  )
}
