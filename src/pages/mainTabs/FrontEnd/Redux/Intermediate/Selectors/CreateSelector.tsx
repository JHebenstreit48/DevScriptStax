import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
