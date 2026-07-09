import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Triggers = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/Animations/Triggers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Angular Animations - Triggers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Triggers;