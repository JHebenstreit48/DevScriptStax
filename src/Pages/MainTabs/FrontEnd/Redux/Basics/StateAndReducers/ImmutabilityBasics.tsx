import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ImmutabilityBasics = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StateAndReducers/ImmutabilityBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Immutability Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ImmutabilityBasics;
