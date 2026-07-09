import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CreateSelector = () => {
  const markdownFilePath = 'FrontEnd/Redux/Intermediate/Selectors/CreateSelector';

  return (
    <>
      <PageLayout>
        <PageTitle title="createSelector" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CreateSelector;
