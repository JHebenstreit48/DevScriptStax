import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
