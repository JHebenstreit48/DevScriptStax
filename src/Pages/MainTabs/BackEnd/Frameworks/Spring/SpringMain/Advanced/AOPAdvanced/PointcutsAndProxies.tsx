import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
