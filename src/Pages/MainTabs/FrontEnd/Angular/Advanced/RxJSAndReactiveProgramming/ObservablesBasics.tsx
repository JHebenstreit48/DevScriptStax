import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ObservablesBasics = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactiveProgramming/ObservablesBasics';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Observables Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ObservablesBasics;
