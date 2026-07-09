import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BasicsAndWrapping = () => {
  const markdownFilePath = 'Languages/Go/Advanced/Errors/BasicsAndWrapping';

  return (
    <>
      <PageLayout>
        <PageTitle title="Basics & Wrapping" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BasicsAndWrapping;
