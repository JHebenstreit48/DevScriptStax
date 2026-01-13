import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PointcutsAndProxies = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/AOPAdvanced/PointcutsAndProxies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Pointcuts & Proxies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PointcutsAndProxies;
