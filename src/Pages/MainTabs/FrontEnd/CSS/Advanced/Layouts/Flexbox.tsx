import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Flexbox = () => {
  const markdownFilePath = 'FrontEnd/CSS/Advanced/Layouts/Flexbox';

  return (
    <>
      <PageLayout>
        <PageTitle title="CSS Layouts - Flexbox" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Flexbox;