import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const PointcutsAndProxies = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/PointcutsAndProxies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pointcuts & Proxies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PointcutsAndProxies;
