import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const Devise = () => {
  const markdownFilePath = 'BackEnd/Frameworks/RubyOnRails/Advanced/Security/Devise';

  return (
    <>
      <PageLayout>
        <PageTitle title="Devise (Auth)" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Devise;
