import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ValidationStates = () => {
  const markdownFilePath = 'FrontEnd/CSS/Tools/Frameworks/ReactBootstrap/Basics/Components/Forms/ValidationStates';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Validation States" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ValidationStates;
