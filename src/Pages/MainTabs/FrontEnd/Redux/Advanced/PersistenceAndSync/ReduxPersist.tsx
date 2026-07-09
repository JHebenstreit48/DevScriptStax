import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
