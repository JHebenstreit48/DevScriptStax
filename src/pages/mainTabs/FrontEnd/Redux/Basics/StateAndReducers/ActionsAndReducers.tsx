import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ActionsAndReducers = () => {
  const markdownFilePath = 'FrontEnd/Redux/Basics/StateAndReducers/ActionsAndReducers';

  return (
    <>
      <PageLayout>
        <PageTitle title="Actions & Reducers" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ActionsAndReducers;
