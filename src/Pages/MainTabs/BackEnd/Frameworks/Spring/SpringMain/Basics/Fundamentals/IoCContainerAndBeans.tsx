import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const IoCContainerAndBeans = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Basics/Fundamentals/IoCContainerAndBeans';

  return (
    <>
      <PageLayout>
        <PageTitle title="IoC Container & Beans" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default IoCContainerAndBeans;
