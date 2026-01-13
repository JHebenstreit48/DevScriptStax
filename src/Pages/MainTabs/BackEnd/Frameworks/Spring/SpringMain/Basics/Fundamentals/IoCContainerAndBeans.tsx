import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const IoCContainerAndBeans = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/IoCContainerAndBeans';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="IoC Container & Beans" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IoCContainerAndBeans;
