import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ImmutabilityBasics = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StateAndReducers/ImmutabilityBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Immutability Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImmutabilityBasics;
