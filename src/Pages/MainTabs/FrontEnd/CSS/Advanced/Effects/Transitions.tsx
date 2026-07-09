import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Transitions = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/Effects/Transitions';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Effects - Transitions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Transitions;