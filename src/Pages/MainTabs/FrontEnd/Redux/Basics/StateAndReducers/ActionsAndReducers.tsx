import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const ActionsAndReducers = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StateAndReducers/ActionsAndReducers';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Actions & Reducers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionsAndReducers;
