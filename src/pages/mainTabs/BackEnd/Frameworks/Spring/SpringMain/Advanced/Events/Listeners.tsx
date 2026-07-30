import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Listeners = () => {
  const markdownFilePath = 'BackEnd/Frameworks/Spring/SpringMain/Advanced/Events/Listeners';

  return (
    <>
      <PageLayout>
        <PageTitle title="Listeners" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Listeners;
