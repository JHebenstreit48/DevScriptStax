import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RxJSOperators = () => {
  const markdownFilePath = 'FrontEnd/Angular/Advanced/RxJSAndReactiveProgramming/RxJSOperators';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="RxJS Operators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RxJSOperators;
