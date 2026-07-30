import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ReduxPersist = () => {
  const markdownFilePath = 'FrontEnd/Redux/Advanced/PersistenceAndSync/ReduxPersist';

  return (
    <>
      <PageLayout>
        <PageTitle title="redux-persist" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ReduxPersist;
